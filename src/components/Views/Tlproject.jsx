import React from 'react';
import { DefaultView } from '@plone/volto/components';
import { Container } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';

const TlprojectView = props => {
  const { content } = props;
  return (      
      <>
      
      <Container id="view-wrapper project-view">
      <Helmet title={content.title} />
      <h1 className="documentFirstHeading">
        {content.title}
      </h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      <h2>Project Description</h2>
      <div dangerouslySetInnerHTML={{ __html: content.details.data }} />
      <h3>Category/Categories</h3>
      <h4>License(s)</h4>
      <h4>Compatibility</h4>
      <h2>Available Downloads</h2>
      </Container>
      </>
  )
};

export default TlprojectView;
