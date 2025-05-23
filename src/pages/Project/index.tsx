import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Markdown from '../../common/components/Markdown';
import { useLocation, useNavigate } from 'react-router-dom';
import useProject from '../../hooks/useProject';
import BoxUnderline from '../../common/components/BoxUnderline';
import ProjectContentGrid from './ProjectContentGrid';
import S from './styles';
import { GlobalContext } from '../../contexts/global';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';
// import ProjectNavBar from './ProjectNavBar';

const MAX_LOADING_DELAY = 2500;

const Project = () => {
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const projectId = state?.projectId;
  if (!projectId) navigate('/'); // Redirect to home page

  const { project, ...projectResponse } = useProject(projectId || '');
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoading || projectResponse.isLoading || isLoadingDelayActive || !areImagesLoaded) return;

    setIsPageLoading(false);
  }, [projectResponse.isLoading, isLoadingDelayActive, areImagesLoaded]);

  useEffect(() => {
    setIsLoadingDelayActive(true);

    setTimeout(() => {
      setIsLoadingDelayActive(false);
    }, MAX_LOADING_DELAY);
  }, [projectId]);

  useEffect(() => {
    if (projectResponse.isLoading) return;

    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(
      document.querySelectorAll('.Loadable-Image'),
    );
    executeCallbackOnMediaCollectionLoad(mediaToLoad, () => {
      setAreImagesLoaded(true);
    });
  }, [project]);

  return (
    <S.ProjectContainer>
      <img
        src={project?.mainImage.path}
        className="Main-Image"
        {...(project?.mainImage.alt && { alt: project?.mainImage.alt })}
      />
      <S.ProjectOverview>
        <Box className="Project-Title-Box">
          <Typography>{project?.name}</Typography>
          <BoxUnderline />
        </Box>
        <Box className="Project-Description-Box">
          <Typography variant="h3" className="Project-Overview-Title">
            Project Overview
          </Typography>
          <Markdown className="Project-Description-Body">{project.description}</Markdown>
        </Box>
      </S.ProjectOverview>
      <ProjectContentGrid content={project?.content || []} isContentSpaced={project.isContentSpaced} />
      {/* <ProjectNavBar project={project} /> */}
    </S.ProjectContainer>
  );
};

export default Project;
