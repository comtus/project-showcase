import Filters from "@/components/Filters";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";
import React from "react";

const page = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });

  //console.log(resources);

  return (
    <main className="flex-center p-10 mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Project Showcase
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      <section className="flex flex-center mt-6 w-full flex-col sm:mt-10">
        <div className="flex mt-10 w-full flex-wrap justify-center gap-10 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadLink={resource.downloadLink}
                views={resource.views}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No resources found</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
