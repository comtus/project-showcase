const page = () => {
  return (
    <main className="flex-center p-10 mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-4 text-center text-white">
            About this site
          </h1>
        </div>
      </section>
      <section className="flex flex-center mt-6 w-full flex-col sm:mt-10">
        <div className="mt-12 flex w-full flex-center justify-center gap-16 pt-10 pb-20">
          <p>
            This site was created using NextJS 13, ShadCN UI and the contents
            are hosted @ Sanity.io
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
