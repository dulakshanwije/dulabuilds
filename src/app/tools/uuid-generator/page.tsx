import PageTitle from "../../../components/ui/PageTitle";

const pageData = {
  title: "UUID Generator",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit. Consectetur fuga debitis quam dolores itaque distinctio harum dolore asperiores quod dignissimos.",
};

const UUIDGeneratorPage = () => {
  return (
    <>
      <PageTitle title={pageData.title} description={pageData.description} />
      <div className="w-full max-w-7xl h-80 bg-mute mx-auto"></div>
    </>
  );
};

export default UUIDGeneratorPage;
