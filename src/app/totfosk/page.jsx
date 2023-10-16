import ReleaseCard from "./ReleaseCard";
import releases from "../../data/releases";

const TotFosk = function () {
  return (
    <div>
      {releases.map((x) => (
        <ReleaseCard key={x.key} albumTunnel={x}></ReleaseCard>
      ))}
    </div>
  );
};

export default TotFosk;
