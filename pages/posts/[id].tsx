import Head from "next/head";
import Layout from "../../components/layout";
import { getPostData } from "../../lib/posts";
import { GetServerSideProps } from "next";

export default function FirstPost({
  postData
}: {
  postData: {
    id: string
    title: string
    date: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};
