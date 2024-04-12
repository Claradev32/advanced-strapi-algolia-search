import algoliasearch from "algoliasearch/lite";
import { InstantSearch, connectSearchBox, connectHits, RefinementList, SortBy, Panel } from "react-instantsearch-dom";

const CustomSearchBox = ({ currentRefinement, refine }: any) => (
  <input
    type="text"
    placeholder="Search products..."
    value={currentRefinement}
    onChange={(e) => refine(e.target.value)}
    className="w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
);

const SearchInput = connectSearchBox(CustomSearchBox);
const searchClient = algoliasearch("8XVVR86Q57", "6f54d13c20586a9d3ecae50741fffa1b");

const Search = () => {
  const ProductCard = ({ product }: any) => (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={`http://localhost:1337` + product.image.url}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="font-bold text-xl">Price: ${product.price}</div>
      </div>
    </div>
  );

  const CustomHits = connectHits(({ hits }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hits.map((hit) => (
        <ProductCard key={hit.objectID} product={hit} />
      ))}
    </div>
  ));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <InstantSearch
        searchClient={searchClient}
        indexName="development_strapi-store"
      >
        <h4>My Store</h4>
        <div className="p-4">
          <SearchInput />
        </div>
        <Panel header="Price Range">
          <RefinementList attribute="price" />
        </Panel>
        <Panel header="Sort by">
          <SortBy
            defaultRefinement="development_strapi-store"
            items={[
              { value: 'development_strapi-store', label: 'Featured' },
              { value: 'development_strapi-store_price_as', label: 'Price asc.' },
              { value: 'development_strapi-store_price_desc', label: 'Price desc.' },
            ]}
          />
        </Panel>
        <CustomHits />
      </InstantSearch>
    </div>
  );
};

export default Search;
