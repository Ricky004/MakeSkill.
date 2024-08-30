"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CategoryGrid from "./category-grid";


const DashboardCategory = () => {
    return (
        <>
            <Tabs defaultValue="frontend" className="mt-2">
                <TabsList className="bg-slate-200">
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="networking">Networking</TabsTrigger>
                    <TabsTrigger value="hardware">Hardware</TabsTrigger>
                    <TabsTrigger value="deep-learning">Deep Learning</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-2
           xl:grid-cols-2 2xl:grid-cols-2 gap-5 ">
                    <CategoryGrid />            
                    <CategoryGrid />            
                </TabsContent>
                <TabsContent value="password"><CategoryGrid /></TabsContent>
            </Tabs>

        </>
    );
}

export default DashboardCategory;