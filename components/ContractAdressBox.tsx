
"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { constants } from "@/lib/constants";
import Notification from "./Nottification";

export default function ContractAddressBox() {
    const [copied, setCopied] = useState(false);
    const [showNotif, setShowNotif] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(constants.contract_address);
            setCopied(true);
            setShowNotif(true);
            setTimeout(() => setCopied(false), 2000); // reset după 2 secunde
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <>
            {showNotif && (
                <Notification
                    message="Contract address copied!"
                    type="success"
                    onClose={() => setShowNotif(false)}
                />
            )}
            <button
                onClick={handleCopy}
                className="px-6 py-2 rounded-full bg-purple-800 text-white font-medium hover:bg-purple-700 transition-all duration-300 flex items-center"
            >
                {copied ? (
                    <>
                        <Check className="h-5 w-5 mr-2 text-green-400" />
                        Copied!
                    </>
                ) : (
                    <>
                        <Copy className="h-5 w-5 mr-2" />
                        Copy Address
                    </>
                )}
            </button>
        </>
    );
}