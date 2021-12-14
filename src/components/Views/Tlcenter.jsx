import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { DefaultView } from '@plone/volto/components';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TlcenterView = props => {
    const { content } = props;
    const tlprojects = useSelector(
        (state) => state.search.subrequests.templateprojects?.items,
    );
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(
        searchContent(
          '/',
          {
            portal_type: ['tlproject'],
            fullobjects: true,
          },
          'templateprojects',
        ),
      );
     }, [dispatch]);
    
  return (
      <Container id="view-wrapper talklist-view">
      <article id="content">
        <header>
          <h1 className="documentFirstHeading">{content.title}</h1>
          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
        </header>
        <section id="content-core">
          {tlprojects &&
            tlprojects.map((item) => (
              <Segment padded clearing key={item.id}>
                <h2>
                  <Link to={item['@id']} >
                    {item.title}
                  </Link>
                </h2>
                <p>{item.description}</p>
                <div dangerouslySetInnerHTML={{ __html: item.details.data }} />
              </Segment>
            ))}
        </section>
      </article>
    </Container>
  )
};

export default TlcenterView;
