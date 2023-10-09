import MainLayout from "@/components/Layout/MainLayout";
import ComponentGrid from "@/components/UI/ComponentGrid";

const MotherBoardPage = ({ pcData }) => {
  return (
    <div>
      <ComponentGrid pcData={pcData}></ComponentGrid>
    </div>
  );
};

export default MotherBoardPage;

MotherBoardPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch("https://pc-build-server.vercel.app/motherboard");
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
