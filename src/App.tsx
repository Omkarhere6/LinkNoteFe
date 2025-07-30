import { useState } from "react";
import { AddContentModal } from "./components/AddContentModal";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex justify-end gap-4 pt-2 pr-4">
        <AddContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        ></AddContentModal>

        <Button
          variant="Secondary"
          text="Share LinkNote"
          StartIcon={ShareIcon("size-4")}
        ></Button>

        <Button
          variant="Primary"
          text="Add content"
          StartIcon={PlusIcon("size-4")}
          onClick={() => {
            setModalOpen(true);
          }}
        ></Button>
      </div>

      <div className="flex gap-4">
        <Card
          type="Youtube"
          link="https://www.youtube.com/watch?v=knGCfzm4jWs?si=6YYAkhab_Vlmc2Ys"
          title="watch it"
        ></Card>
        <Card
          type="Twitter"
          link="https://x.com/arpit_bhayani/status/1950605603250020827"
          title="read it"
        ></Card>
      </div>
    </>
  );
}

export default App;
