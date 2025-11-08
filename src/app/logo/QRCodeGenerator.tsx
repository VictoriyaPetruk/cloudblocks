import React, { useState, useRef } from "react";
import { QRCode } from "react-qrcode-logo";

const QRCodeGenerator = () => {
  // Use the public path directly for react-qrcode-logo
  const cloudblocksLogo = "/img/logo-1.png";
  // Ref for the QR code container
  const qrContainerRef = useRef<HTMLDivElement>(null);

  // State for the URL/text input
  const [inputValue, setInputValue] = useState("https://cloudblocks.tech/");
  const [qrValue, setQrValue] = useState("https://cloudblocks.tech/");

  // State for the color input
  const [colorInput, setColorInput] = useState("#D85D41");
  const [qrColor, setQrColor] = useState("#D85D41");

  // Function to handle the button click
  const handleGenerateClick = () => {
    // Update the QR code's value and color on button click
    if (inputValue) {
      setQrValue(inputValue);
    }
    setQrColor(colorInput);
  };

  // Function to generate filename from QR value
  const generateFileName = (value: string): string => {
    if (!value) return "qr-code.png";

    try {
      // Check if it's a URL
      const url = new URL(value);

      // Check if path contains "start/" and extract the segment after it
      if (url.pathname && url.pathname.includes("/start/")) {
        const pathSegments = url.pathname.split("/");
        const startIndex = pathSegments.findIndex(
          (segment) => segment === "start"
        );

        if (startIndex !== -1 && pathSegments[startIndex + 1]) {
          // Use the segment after "start/"
          let filename = pathSegments[startIndex + 1];
          // Remove query strings and fragments if present
          filename = filename.split("?")[0].split("#")[0];
          // Sanitize filename (keep base64 characters like =, +, but remove /)
          filename = filename
            .replace(/[^a-z0-9\-_=+]/gi, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");
          return filename || "qr-code.png";
        }
      }

      // Fallback: Extract domain name (remove www. and protocol)
      let filename = url.hostname.replace(/^www\./, "");
      // If there's a path, try to use the last segment
      if (url.pathname && url.pathname !== "/") {
        const pathSegments = url.pathname.split("/").filter(Boolean);
        if (pathSegments.length > 0) {
          filename = pathSegments[pathSegments.length - 1];
        }
      }
      // Sanitize filename
      filename = filename
        .replace(/[^a-z0-9\-_]/gi, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      return filename || "qr-code.png";
    } catch {
      // Not a URL, treat as plain text
      let filename = value
        .substring(0, 50) // Limit length
        .replace(/[^a-z0-9\-_\s]/gi, "-")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      return filename || "qr-code.png";
    }
  };

  // Function to handle download
  const handleDownload = () => {
    if (!qrContainerRef.current) return;

    // Find the canvas element within the QR code container
    const canvas = qrContainerRef.current.querySelector(
      "canvas"
    ) as HTMLCanvasElement;

    if (!canvas) {
      console.error("Canvas not found");
      return;
    }

    // Generate filename from QR value
    const fileName = generateFileName(qrValue);
    const fullFileName = `${fileName}.png`;

    const link = document.createElement("a");
    link.download = fullFileName;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div
      style={{ textAlign: "center", fontFamily: "sans-serif", padding: "20px" }}
    >
      <h1>CloudBlocks QR Code Generator</h1>

      {/* Input and Button Section */}
      <div style={{ margin: "30px auto", maxWidth: "500px" }}>
        {/* URL Input */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Enter URL or text here'
            style={{
              padding: "12px",
              width: "100%",
              boxSizing: "border-box",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Color Input */}
        <div
          style={{
            marginBottom: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            htmlFor='color-picker'
            style={{ marginRight: "10px", fontSize: "16px" }}
          >
            QR Color:
          </label>
          <input
            type='color'
            id='color-picker'
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            style={{
              border: "none",
              background: "none",
              width: "40px",
              height: "40px",
            }}
          />
          <input
            type='text'
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            style={{
              padding: "12px",
              width: "150px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginLeft: "5px",
            }}
          />
        </div>

        <button
          onClick={handleGenerateClick}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#D85D41",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Generate QR Code
        </button>
      </div>

      {/* QR Code Display - Renders only if qrValue is not empty */}
      {qrValue && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            ref={qrContainerRef}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <QRCode
              size={300}
              ecLevel='M'
              value={qrValue} // Use the state variable for value
              logoImage={cloudblocksLogo}
              logoWidth={60}
              logoHeight={60}
              logoPadding={0}
              removeQrCodeBehindLogo={true}
              fgColor={qrColor} // Use the state variable for color
              eyeRadius={[
                { outer: [10, 10, 0, 10], inner: [0, 10, 10, 10] },
                { outer: [10, 10, 10, 0], inner: [10, 0, 10, 10] },
                { outer: [10, 0, 10, 10], inner: [10, 10, 10, 0] },
              ]}
              qrStyle='squares'
              logoOpacity={1}
              logoPaddingStyle='square'
            />
          </div>
          <button
            onClick={handleDownload}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
