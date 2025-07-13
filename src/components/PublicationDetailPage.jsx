// src/components/PublicationDetailPage.jsx

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePublications } from '../hooks/usePublications';

export default function PublicationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { publications } = usePublications();
  const publication = publications.find((p) => p.id === Number(id));

  if (!publication) {
    return (
      <div className="text-center py-8 text-gray-600">
        Publikasi tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">

      {/* Header: Judul & Tanggal */}
      <header className="text-center md:text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight break-words">
          {publication.title}
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Tanggal Rilis: {publication.releaseDate}
        </p>
      </header>

      {/* Cover Image */}
      <div className="flex justify-center" mt-6>
        <img
          src={publication.coverUrl}
          alt={`Cover of ${publication.title}`}
          className="w-48 sm:w-64 md:w-150 object-cover rounded-lg shadow-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'https://placehold.co/200x280/cccccc/ffffff?text=No+Image';
          }}
        />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Kembali
      </button>

    </div>
  );
}