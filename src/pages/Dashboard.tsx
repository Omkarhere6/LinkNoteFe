import { useEffect, useState } from "react";
import { AddContentModal } from "../components/AddContentModal";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContents";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents , refresh } = useContent();

  useEffect(() => {
    refresh();
  },[contents]);

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
              {contents.map(({title,type,link,tags,_id},index) => <Card 
                type={type}
                link={link}
                title={title}
                tags={tags}
                contentId={_id}
                key={index}
              >

              </Card>)}
          </div>
        </div>
    </div>
  );
}

