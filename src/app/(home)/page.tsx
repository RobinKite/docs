"use client";
import { usePaginatedQuery } from "convex/react";

import { useSearchParam } from "@/hooks/use-search-param";

import { api } from "../../../convex/_generated/api";

import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";
import { DocumentsTable } from "./documents-table";

const Home = () => {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed left-0 right-0 top-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};

export default Home;
