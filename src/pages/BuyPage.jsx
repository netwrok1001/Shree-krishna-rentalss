import { Heart, SlidersHorizontal } from "lucide-react";
import "./BuyPage.css";

export default function BuyPage({
  appliedQuery,
  favorites,
  savedOnly,
  setSavedOnly,
  filtersOpen,
  setFiltersOpen,
}) {
  return (
    <div className="buy-page mode-page">
      <div className="mode-page__intro">
        <div>
          <div className="mode-page__eyebrow">A place to put down roots</div>
          <h2 className="mode-page__title">
            Homes with a little more meaning
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
    </div>
  );
}
