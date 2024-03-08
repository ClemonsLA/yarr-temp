"use client"
import {Tabs, Tab} from "@nextui-org/tabs";
import { Card,CardBody } from "@nextui-org/card";
import { useState } from "react";

export default function App({childChar, childExp, childCerts, childBuzz, childClear}) {
    const [selected, setSelected] = useState("Career");
  
    return (
      <div className="flex w-full flex-col">
        <Tabs 
          aria-label="Options"         
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="bordered"
        >
          <Tab key="Career" title="Career Field">
            <Card>
              <CardBody>
                <form>
                    {childChar}
                </form>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Exp" title="Experience">
            <Card>
              <CardBody>
                <form>
                    {childExp}
                </form>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Certs" title="Certifications">
            <Card>
              <CardBody>
                <form>
                    {childCerts}
                </form>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Buzz" title="Technologies">
            <Card>
              <CardBody>
                <form>
                    {childBuzz}
                </form>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="Clear" title="Clearance">
            <Card>
              <CardBody>
                <form>
                    {childClear}
                </form>
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>  
    );
  }