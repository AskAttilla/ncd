
import ContentWrapper from "../content-wrapper/content-wrapper";
import "./header.scss"

const Header = ({title}) => {
    return (
        <div className="header">
            <ContentWrapper>
                {title && <h1 className="header__title">{title}</h1>}
            </ContentWrapper>
        </div>
  );
}

export default Header;