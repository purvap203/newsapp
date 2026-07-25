import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsItemSkeleton = ({ darkMode }) => {
  return (
    <div className="my-3 w-100">
      <div
        className="card h-100 shadow-sm"
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          border: darkMode ? "1px solid #333" : "1px solid #dee2e6",
        }}
      >
        {/* Image Skeleton */}
        <Skeleton height={200} baseColor={darkMode ? "#333" : "#ebebeb"} highlightColor={darkMode ? "#444" : "#f5f5f5"} />

        <div className="card-body d-flex flex-column">
          {/* Badge Skeleton */}
          <Skeleton width={80} height={20} borderRadius={20} baseColor={darkMode ? "#333" : "#ebebeb"} highlightColor={darkMode ? "#444" : "#f5f5f5"} />

          {/* Title Skeleton */}
          <Skeleton count={2} height={20} className="mt-2" baseColor={darkMode ? "#333" : "#ebebeb"} highlightColor={darkMode ? "#444" : "#f5f5f5"} />

          {/* Description Skeleton */}
          <Skeleton count={3} height={15} className="mt-2" baseColor={darkMode ? "#333" : "#ebebeb"} highlightColor={darkMode ? "#444" : "#f5f5f5"} />

          {/* Author Skeleton */}
          <Skeleton width={150} height={12} className="mt-2" baseColor={darkMode ? "#333" : "#ebebeb"} highlightColor={darkMode ? "#444" : "#f5f5f5"} />

          {/* Button Skeleton */}
          <Skeleton height={32} className="mt-3" borderRadius={4} baseColor={darkMode ? "#333" : "#ebebeb"} highlightColor={darkMode ? "#444" : "#f5f5f5"} />
        </div>
      </div>
    </div>
  );
};

export default NewsItemSkeleton;