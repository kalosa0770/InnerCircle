import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Listen for the "beforeinstallprompt" event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      console.log("PWA install prompt saved.");
      toast.info("Lucid Path is installable! Tap 'Download App' to install.", {
        position: "top-center",
        autoClose: 4000,
        theme: "dark",
      });
    };

    // Detect when installed
    const handleAppInstalled = () => {
      console.log("Lucid Path installed!");
      setIsInstalled(true);
      toast.success("Lucid Path has been added to your home screen!", {
        position: "top-center",
        autoClose: 4000,
        theme: "dark",
      });
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  // Handle the install button click
  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      toast.warn("Install prompt not available yet!", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      toast.success("Installing Lucid Path...", {
        position: "top-center",
        theme: "dark",
      });
    } else {
      toast.info("Installation dismissed.", {
        position: "top-center",
        theme: "dark",
      });
    }

    setDeferredPrompt(null);
  };

  if (isInstalled) return null;

  return (
    <div className="flex justify-center py-6">
      <button
        onClick={handleInstallClick}
        className="bg-gold text-[#0a1f1f] px-6 py-3 rounded-xl font-bold shadow-md hover:bg-yellow-400 transition-all"
      >
        📲 Download App
      </button>
    </div>
  );
};

export default InstallPrompt;
