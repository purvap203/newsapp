import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, category, darkMode } = this.props;

    const categoryColors = {
      business: { bg: "#FF6B6B", text: "#fff", emoji: "💼" },
      entertainment: { bg: "#A855F7", text: "#fff", emoji: "🎬" },
      general: { bg: "#3B82F6", text: "#fff", emoji: "📰" },
      health: { bg: "#22C55E", text: "#fff", emoji: "🏥" },
      science: { bg: "#F59E0B", text: "#fff", emoji: "🔬" },
      sports: { bg: "#d737ac", text: "#fff", emoji: "⚽" },
      technology: { bg: "#2326e6", text: "#fff", emoji: "💻" },
    };

    const badge = categoryColors[category?.toLowerCase()] || {
      bg: "#e2e3e5",
      text: "#383d41",
      emoji: "📄",
    };

    return (
      <div className="my-3">
        <div
          className="card h-100 shadow-sm"
          style={{
            backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
            border: darkMode ? "1px solid #333" : "1px solid #dee2e6",
            transition: "all 0.3s ease",
          }}
        >
          {/* Category Badge */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: badge.bg,
              color: badge.text,
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              zIndex: 1,
              textTransform: "capitalize",
              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
            }}
          >
            {badge.emoji} {category}
          </div>

          <img
            src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/10/sensex1-1-770x433.jpg" : imageUrl}
            className="card-img-top"
            alt="news"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5
              className="card-title"
              style={{ color: darkMode ? "#ffffff" : "#121212" }}
            >
              {title}
            </h5>
            <p
              className="card-text flex-grow-1"
              style={{ color: darkMode ? "#aaaaaa" : "#555555" }}
            >
              {description}
            </p>
            <p className="card-text">
              <small style={{ color: darkMode ? "#888888" : "#6c757d" }}>
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm mt-auto"
              style={{
                backgroundColor: darkMode ? "#6366F1" : "#212529",
                color: "#ffffff",
                border: "none",
              }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;