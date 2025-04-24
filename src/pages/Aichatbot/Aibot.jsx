import React from 'react';
export default function aichat(){
    return (
        <div
      className="aichatbot"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/24/20/20250424201709-GO8DK3FG.json"
        title="AI Chatbot"
        width="100%"
        height="100%"

        style={{ border: "none", overflow : "hidden"}}
      />
    </div>
    )
}