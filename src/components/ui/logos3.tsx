
import React from "react";

const logos = [
  {
    name: "Alibaba",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Alibaba_Cloud_logo.svg",
  },
  {
    name: "Huawei",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Huawei_Standard_logo.svg",
  },
  {
    name: "Sinopec",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sinopec_Logo.svg",
  },
  {
    name: "Emirates Group",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Emirates_logo.svg",
  },
  {
    name: "DP World",
    url: "https://seeklogo.com/images/D/dp-world-logo-15D32C8DCB-seeklogo.com.png",
  },
  {
    name: "Nubank",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Nubank_logo_2021.svg",
  },
  {
    name: "Mercado Libre",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mercado_Libre_logo.svg",
  },
  {
    name: "Dangote Group",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dangote_Group_logo.png",
  },
  {
    name: "MTN Group",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/87/MTN_Logo.svg",
  },
  {
    name: "Safaricom",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Safaricom_logo.svg",
  },
];

export function Logos3() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-4">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex flex-col items-center justify-center group"
          style={{ minWidth: 96 }}
        >
          <img
            src={logo.url}
            alt={logo.name + " logo"}
            className="h-10 max-w-[92px] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 object-contain"
            loading="lazy"
            draggable={false}
          />
          <span className="text-xs text-pearl-white/50 font-semibold text-center mt-2">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Logos3;
