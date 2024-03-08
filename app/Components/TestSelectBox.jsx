"use client"
import {Select, SelectItem, } from "@nextui-org/select";
import {Button} from "@nextui-org/button"
import {useDisclosure} from "@nextui-org/use-disclosure";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
  } from "@nextui-org/modal";

const certs = [
    {value:"comptiaSec+", name: "sec+", label: "Sec +", vendor: "CompTIA"},
    {value:"ciscoCcna", name: "ccna", label: "CCNA", vendor: "Cisco"},
    {value:"awsCcp", name: "ccp", label: "CCP", vendor: "AWS"},
]

const stupidKeys = [{id: "Add Certification", action: "Cert Adder"}, {id: "selectionTwo", action: "Delete Certification"},]
export default function TestSelectBox() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <Select
      items={stupidKeys}
      label="Certifications"
      variant="bordered"
      renderValue={(items) => {
        return items.map((item)=><div key={item.key}>
            <>
          
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                  <ModalBody>
                    <p> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                      dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                      Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                      Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                      proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
        </div>);
      }}
    >

        {(thing) => <SelectItem key={thing.id} textValue="Certfications">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col">
            <Button onPress={onOpen}>Open Modal</Button>
              <span className="text-tiny text-default-400">nothing to see here</span>
            </div>
          </div>
        </SelectItem>}
        
    </Select>
  );
}
