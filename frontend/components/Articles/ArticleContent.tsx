type Props = {
  content: string;
};

const ArticleContent = (props: Props) => {
  const { content } = props;

  return <main className="text-justify">{content}</main>;
};

export default ArticleContent;
