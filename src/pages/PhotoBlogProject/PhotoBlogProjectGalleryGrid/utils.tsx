import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import S, { classes } from './styles';
import type {
  PhotoBlogProjectGalleryCell,
  PhotoBlogProjectGalleryRow,
  PhotoBlogProjectGallerySection,
} from '../../../types/data/photoBlogProject';

const renderCellContent = ({
  path,
  type,
  alt,
}: PhotoBlogProjectGalleryCell): JSX.Element => {
  if (type === 'image link') {
    return <img className="Loadable-Image" src={path} loading="lazy" {...alt && { alt: alt }} />;
  }
  if (type === 'direct video link') {
    return <video className="Loadable-Direct-Video" src={path} autoPlay loop muted />;
  }
  if (type === 'embedded video link') {
    const videoLink = `${path}?mute=1`;
    return (
      <div className="iframe-container Loadable-Embedded-Video-Container">
        <iframe width="420" height="315" src={videoLink} className="video" allowFullScreen />
      </div>
    );
  }

  return <></>;
};

export const renderGallerySections = (
  gallerySections: Array<PhotoBlogProjectGallerySection>,
  setIsLightboxOpen: Dispatch<SetStateAction<boolean>>,
  setSlideIndex: Dispatch<SetStateAction<number>>,
): JSX.Element => {
  let slideIndexCounter = 1;

  return (
    <>
      {gallerySections.map((gallerySection) => {
        const { title, description, rows } = gallerySection;

        return (
          <div className={classes.sectionContainer} key={uuidv4()}>
            {title && <h5 className={classes.title}>{title}</h5>}
            {description && <p className={classes.description}>{description}</p>}
            {rows.length > 0 && (
              <div className={classes.rowsContainer}>
                {rows.map((row: PhotoBlogProjectGalleryRow) => {
                  const { cellAmount, cells } = row;
                  const cellAmountToRender = Math.min(cellAmount, cells.length);
                  const cellsToRender = cells.slice(0, cellAmountToRender);

                  return (
                    <S.PhotoBlogProjectGalleryRow
                      key={uuidv4()}
                      className={classes.row}
                      cellAmount={cellAmount}
                    >
                      {cellsToRender.map((cell: PhotoBlogProjectGalleryCell) => {
                        const { path, type } = cell;
                        if (!path || (
                          !['image link', 'direct video link', 'embedded video link'].includes(type)
                        )) return <></>;

                        const slideIndex = slideIndexCounter;
                        if (type !== 'embedded video link') slideIndexCounter += 1;

                        return (
                          <div
                            key={uuidv4()}
                            className={classes.cell}
                            {...type !== 'embedded video link' && {
                              onClick: () => {
                                setIsLightboxOpen(true);
                                setSlideIndex(slideIndex);
                              }
                            }}
                          >
                            {renderCellContent(cell)}
                          </div>
                        );
                      })}
                    </S.PhotoBlogProjectGalleryRow>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
