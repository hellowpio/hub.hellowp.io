import React, { useState, useEffect } from 'react';

function HelloImgStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.helloimg.io/stats');
        const json = await response.json();
        if (json.success && json.data) {
          setStats(json.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch HelloIMG stats:', error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString();
  };

  const formatBytes = (bytes) => {
    if (bytes >= 1073741824) {
      return (bytes / 1073741824).toFixed(0) + ' GB';
    }
    if (bytes >= 1048576) {
      return (bytes / 1048576).toFixed(0) + ' MB';
    }
    return bytes + ' bytes';
  };

  if (loading) {
    return (
      <div className="helloimg-stats">
        <p>Statisztikák betöltése...</p>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="helloimg-stats">
        <ul>
          <li><strong>4M+</strong> optimalizált kép</li>
          <li><strong>300+ GB</strong> megtakarított tárhely</li>
          <li><strong>~56%</strong> átlagos tömörítés minőségromlás nélkül</li>
        </ul>
      </div>
    );
  }

  const savedPercentage = Math.round(stats.average_savings_percent || 56);

  return (
    <div className="helloimg-stats">
      <ul>
        <li><strong>{formatNumber(stats.total_images_optimized)}</strong> optimalizált kép</li>
        <li><strong>{formatBytes(stats.total_saved_bytes)}</strong> megtakarított tárhely</li>
        <li><strong>~{savedPercentage}%</strong> átlagos tömörítés minőségromlás nélkül</li>
      </ul>
    </div>
  );
}

export default HelloImgStats;
