import './details.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Tooltip, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import StarRatingComponent from '../../../Components/Star/StarRatingComponent';
import { useTranslation } from 'react-i18next';

const { Paragraph } = Typography;

const Details = ({ details, setDetails }) => {
  const [expanded, setExpanded] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const element = document.getElementById('details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="details">
      <div className="detailsBack">
        <ArrowLeftOutlined onClick={() => setDetails(null)} />
      </div>
      <div className="about">
        <div className="imageDiv">
          <img src={details?.imgSrc} alt={details?.destTitle} />
          <h3>{t('main.hotels')}</h3>

          {Array.isArray(details.hotels) &&
            details?.hotels.map((i) => {
              return (
                <span className="continent flex" key={i?.id}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      i?.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiOutlineLocationMarker className="icon" />
                  </a>
                  <Tooltip title={i?.name}>
                    <span
                      className="name"
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '150px',
                      }}
                    >
                      {i?.name}
                    </span>
                  </Tooltip>

                  <div className="stars">
                    <StarRatingComponent item={i.star} arr={details.hotels} />
                  </div>
                </span>
              );
            })}
        </div>

        <div className="paragraph">
          <Paragraph
            ellipsis={!expanded ? { rows: 5, expandable: false } : false}
          >
            {details?.paragraph}
          </Paragraph>
          <span
            style={{ color: '#1890ff', cursor: 'pointer', marginLeft: 5 }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? t('main.less') : t('main.more')}
          </span>
          <button className="btn">
            <a href={details.book}>{t('header.book')}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
