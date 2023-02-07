interface Props {
  url: string;
  name: string;
  children: React.ReactNode;
}

function Social({ url, name, children }: Props) {
  return (
    <a href={url} target="_blank" className="Contact-social">
      {children}
    </a>
  );
}

export default Social;
