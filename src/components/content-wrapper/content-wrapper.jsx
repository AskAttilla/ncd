import "./content-wrapper.scss"

const ContentWrapper = ({children}) => {
    return (
        <div className="content-wrapper">
            {children}
        </div>
  );
}

export default ContentWrapper;