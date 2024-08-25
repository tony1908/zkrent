import { VerificationLevel, IDKitWidget } from "@worldcoin/idkit";

export default function Identity() {

    const onSuccess = (result) => {
        // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
        window.alert("Successfully verified with World ID! Your nullifier hash is: " + result.nullifier_hash);
        window.location.replace('/proof');
    };

    const handleProof = async (result) => {
        console.log("Proof received from IDKit:\n", JSON.stringify(result)); // Log the proof from IDKit to the console for visibility
        const reqBody = {
            merkle_root: result.merkle_root,
            nullifier_hash: result.nullifier_hash,
            proof: result.proof,
            verification_level: result.verification_level,
            action: "",
            signal: "",
        };
        console.log("Sending proof to backend for verification:\n", JSON.stringify(reqBody)) // Log the proof being sent to our backend for visibility
        const res = await fetch("http://localhost:3001/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        })
        const data = await res.json()
        if (res.status == 200) {
            console.log("Successful response from backend:\n", data); // Log the response from our backend for visibility
        } else {
            throw new Error(`Error code ${res.status} (${data.code}): ${data.detail}` ?? "Unknown error."); // Throw an error if verification fails
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center align-middle h-screen">
                <p className="text-2xl mb-5">We are what we repeatedly do.
                </p>
                <IDKitWidget
                    action={""}
                    app_id={""}
                    onSuccess={onSuccess}
                    handleVerify={handleProof}
                    verification_level={VerificationLevel.Orb} // Change this to VerificationLevel.Device to accept Orb- and Device-verified users
                >
                    {({ open }) =>
                        <button className="border border-black rounded-md" onClick={open}>
                            <div className="mx-3 my-1">Verify with World ID</div>
                        </button>
                    }
                </IDKitWidget>
            </div>
        </div>
    );
}
