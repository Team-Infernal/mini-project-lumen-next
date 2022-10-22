type Props = {
  title: string;
};

const ArticleTitle = (props: Props) => {
  const { title } = props;

  return <h1 className="text-3xl">{title}</h1>;
};

export default ArticleTitle;
