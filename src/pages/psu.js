import MainLayout from "@/components/Layout/MainLayout";
import ComponentGrid from "@/components/UI/ComponentGrid";

const PowerSupply = ({ pcData }) => {
  return (
    <div>
      <ComponentGrid pcData={pcData}></ComponentGrid>
    </div>
  );
};

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch("https://pc-build-server.vercel.app/psu");
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
