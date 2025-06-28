import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Landmark, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const regionIcons = {
  Africa: <Globe className="w-5 h-5 mr-2" />,
  Asia: <Globe className="w-5 h-5 mr-2" />,
  "Latin America": <Globe className="w-5 h-5 mr-2" />,
  China: <Landmark className="w-5 h-5 mr-2" />,
};

const regionApiMap = {
  Africa: "Africa",
  Asia: "Asia",
  "Latin America": "Americas",
  China: "Asia", // China is in Asia, will be filtered from the result
};

export default function WeaveSendSection() {
  const [selectedRegion, setSelectedRegion] = useState("Africa");
  const [countries, setCountries] = useState({
    Africa: [],
    Asia: [],
    "Latin America": [],
    China: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchPromises = Object.entries(regionApiMap).map(async ([region, apiRegion]) => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${apiRegion}`);
        const data = await res.json();
        const countryList = data.map((c) => ({
          name: c.name.common,
          from: "USD",
          to: c.currencies ? Object.keys(c.currencies)[0] : "USD",
          flag: c.flags.svg,
        }));

        const finalList = region === "China"
          ? countryList.filter((c) => c.name === "China")
          : countryList;

        setCountries((prev) => ({ ...prev, [region]: finalList }));
      } catch (error) {
        console.error(`Failed to fetch countries for ${region}:`, error);
      }
    });

    Promise.all(fetchPromises).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto bg-white text-blue-900">
      <div className="text-center mb-10">
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-ink-black">
          Weave Works in <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-500 via-brand-blue-400 to-brand-blue-700 animate-gradient-x">Nearly Every Country</span>
          <br />
          in the <span className="text-brand-blue font-extrabold underline decoration-brand-blue/30 underline-offset-4">Global South.</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-ink-black/80">
          Send money to China, Asia, Africa & Latin America fast, easy and almost free.
        </p>
      </div>

      <Tabs
        value={selectedRegion}
        onValueChange={(newRegion) => {
          setSelectedRegion(newRegion);
          setSearchTerm("");
        }}
        className="w-full"
      >
        <TabsList className="flex justify-center mb-6 flex-wrap gap-2 sm:gap-4">
          {Object.keys(regionIcons).map((region) => (
            <TabsTrigger
              key={region}
              value={region}
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-blue-600 hover:bg-blue-100 hover:text-blue-700 flex items-center px-4 py-2 rounded-full transition-colors duration-200 text-sm sm:text-base"
            >
              {regionIcons[region]} {region}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="max-w-sm mx-auto mb-8">
          <Input
            type="text"
            placeholder={`Search in ${selectedRegion}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
          />
        </div>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRegion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              {isLoading ? (
                <div className="text-center py-10">Loading...</div>
              ) : (
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-4 min-w-max">
                    {(() => {
                      const filteredCountries = countries[selectedRegion].filter((country) =>
                        country.name.toLowerCase().includes(searchTerm.toLowerCase())
                      );

                      if (filteredCountries.length === 0) {
                        return (
                          <div className="text-center w-full py-10">
                            <p className="font-semibold text-lg text-gray-600">Don't see your country?</p>
                            <p className="text-gray-500">We're expanding fast!</p>
                          </div>
                        );
                      }

                      return filteredCountries.map((country) => (
                        <Card
                          key={country.name}
                          className="min-w-[200px] max-w-[200px] flex-shrink-0 bg-white hover:shadow-lg transition-shadow border border-gray-200 rounded-xl overflow-hidden"
                        >
                          <CardContent className="p-4 flex flex-col gap-3 items-center text-center">
                            <img src={country.flag} alt={`${country.name} flag`} className="w-12 h-8 object-cover rounded-sm shadow-md"/>
                            <div className="font-bold text-gray-800 truncate w-full">
                              {country.name}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              {country.from} <ArrowRightLeft className="w-4 h-4 text-cyan-500" /> {country.to}
                            </div>
                            <Button className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2 text-sm transition-colors duration-200">
                              Send to {country.name}
                            </Button>
                          </CardContent>
                        </Card>
                      ));
                    })()}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
}
