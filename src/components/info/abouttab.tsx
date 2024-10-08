import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Suspense } from "react";
import AnimeInfoEps from "./episodes";
import AnimeInfoChar from "./characters";
import AnimeInforRelate from "./relateds";
import AnimeInfoAbout from "./about";

export default function AboutTab(props: {
  AnilistInfo: any;
  Aniid: any;
  EpisodeData: any;
}) {
  const episodesdata = props.EpisodeData;
  const AnilistInfo = props.AnilistInfo;
  const ani_id = props.Aniid;
  return (
    <>
      <Tabs defaultValue="episodes">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="episodes">Episodes</TabsTrigger>
          <TabsTrigger value="characters">Characters</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="related">Related</TabsTrigger>
        </TabsList>
        <TabsContent value="episodes">
          <Card>
            <CardHeader>
              <CardTitle>Episodes</CardTitle>
              <CardDescription>
                Explore the episodes of the{" "}
                {AnilistInfo.title ? AnilistInfo.title.english : "this "} anime
                series.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense
                fallback={
                  <span className="text-center content-center justify-items-center">
                    Loading.....
                  </span>
                }
              >
                <AnimeInfoEps id={ani_id} />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="characters">
          <Card>
            <CardHeader>
              <CardTitle>Characters</CardTitle>
              <CardDescription>
                Meet the main characters of the{" "}
                {AnilistInfo.title ? AnilistInfo.title.english : "this "}
                anime.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimeInfoChar AnilistInfo={AnilistInfo} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
              <CardDescription>
                Learn more about the{" "}
                {AnilistInfo.title ? AnilistInfo.title.english : "this "} anime
                series.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimeInfoAbout AnilistInfo={AnilistInfo} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="related">
          <Card>
            <CardHeader>
              <CardTitle>Related Content</CardTitle>
              <CardDescription>
                Discover more anime series similar to{" "}
                {AnilistInfo.title
                  ? AnilistInfo.title.english
                  : "this anime series"}
                .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimeInforRelate AnilistInfo={AnilistInfo} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
