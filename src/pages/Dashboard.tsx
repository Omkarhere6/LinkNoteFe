import { useState } from "react";
import { AddContentModal } from "../components/AddContentModal";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
        <Sidebar/>
        <div className="ml-68 p-4 min-h-screen bg-gray-100  ">
        <AddContentModal
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          ></AddContentModal>

        <div className="flex justify-end gap-4 pt-2 pr-4">

          <Button
            variant="Secondary"
            text="Share LinkNote"
            StartIcon={<ShareIcon size="size-4"/>}
          ></Button>

          <Button
            variant="Primary"
            text="Add content"
            StartIcon={<PlusIcon size="size-4"/>}
            onClick={() => {
              setModalOpen(true);
            }}
          ></Button>
        </div>
        <div className="flex gap-4 pt-6 flex-wrap">
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
        </div>
    </div>
  );
}

