import { ArrowUpRight, Heart, MapPin, SlidersHorizontal } from "lucide-react";
import "./RentPage.css";

export default function RentPage({
  appliedQuery,
  favorites,
  savedOnly,
  setSavedOnly,
  filtersOpen,
  setFiltersOpen,
  bhopalAreas,
  mapPlace,
  setMode,
  setQuery,
  setAppliedQuery,
  googleMapsUrl,
}) {
  return (
    <div className="rent-page mode-page">
      <div className="mode-page__intro">
        <div>
          <div className="mode-page__eyebrow">
            Long-term rentals, chosen with care
          </div>
          <h2 className="mode-page__title">
            Find a home for the next chapter
          </h2>
          <p className="mode-page__description">
            {appliedQuery
              ? `Showing thoughtful finds near “${appliedQuery}”`
              : "Considered homes and local journeys, ready when you are."}
          </p>
        </div>
        <div className="mode-page__actions">
          <button
            onClick={() => setSavedOnly(!savedOnly)}
            className={`mode-page__action ${savedOnly ? "mode-page__action--active" : ""}`}
          >
            <Heart size={15} fill={savedOnly ? "currentColor" : "none"} />
            Saved {favorites.length > 0 && `(${favorites.length})`}
          </button>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={`mode-page__action ${filtersOpen ? "mode-page__action--active" : ""}`}
          >
            <SlidersHorizontal size={15} />
            Filters
          </button>
        </div>
      </div>
      <section
        aria-label="Bhopal rental map"
        className="rent-page__map"
      >
        <div className="rent-page__map-copy">
          <div className="rent-page__location">
            <MapPin size={14} />
            Bhopal, Madhya Pradesh
          </div>
          <h3 className="rent-page__map-title">
            Find your place in Bhopal
          </h3>
          <p className="rent-page__map-description">
            Explore rentals across the city’s neighbourhoods. Choose an area to
            see matching homes and open it in Google Maps.
          </p>
          <div className="rent-page__areas">
            {bhopalAreas.map((area) => (
              <button
                key={area}
                onClick={() => {
                  setMode("Rent");
                  setQuery(area);
                  setAppliedQuery(area);
                  setSavedOnly(false);
                }}
                className={`rent-page__area ${appliedQuery.toLowerCase().includes(area.toLowerCase()) ? "rent-page__area--active" : ""}`}
              >
                {area}
              </button>
            ))}
          </div>
          <a
            href={googleMapsUrl(mapPlace)}
            target="_blank"
            rel="noreferrer"
            className="rent-page__maps-link"
          >
            Open Bhopal in Google Maps <ArrowUpRight size={14} />
          </a>
        </div>
        <iframe
          title={`Google Maps: ${mapPlace}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(mapPlace)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rent-page__map-frame"
        />
      </section>
    </div>
  );
}
