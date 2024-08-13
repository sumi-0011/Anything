import React from "react";
import { m } from 'framer-motion';

import Accordion from "./AccordionMotion";
import styled from 'styled-components';

const ACCORDION_DATA = [
  {
    title: "Card Processing",
    desc: "We support a wide range of major international card issuers, including VISA and MasterCard.",
    supportingText:
      "*With Smart Routing and Cascading technology, we offer fast transaction processing speeds and high approval rates.",
    videoLink: "/assets/video/business/stic_direct/Direct_web_01.mp4",
    methods: [
      "https://asset.sticpay.com/main/img/banking_finance/Visa.png",
      "https://asset.sticpay.com/main/img/banking_finance/Mastercard.png",
      "https://asset.sticpay.com/main/img/banking_finance/JCB.png",
    ],
  },
  {
    title: "E-Wallet",
    desc: "We offer safe and convenient online payments with e-wallets such as STICPAY, Astropay, Skrill, and Neteller.",
    videoLink: "/assets/video/business/stic_direct/Direct_web_02.mp4",
    methods: [
      "https://asset.sticpay.com/main/img/banking_finance/STICPAY.png",
      "https://asset.sticpay.com/main/img/banking_finance/Astropay.png",
      "https://asset.sticpay.com/main/img/banking_finance/SKRILL.png",
      "https://asset.sticpay.com/main/img/banking_finance/neteller-green.png",
    ],
  },
  {
    title: "APMs",
    desc: "We support localized payment options such as Alipay, UPI, and domestic bank transfers for tailored, convenient transactions.",
    videoLink: "/assets/video/business/stic_direct/Direct_web_03.mp4",
    methods: [
      "https://asset.sticpay.com/main/img/banking_finance/alipay.png",
      "https://asset.sticpay.com/main/img/banking_finance/alipay_plus.png",
      "https://asset.sticpay.com/main/img/banking_finance/UPI.png",
      "https://asset.sticpay.com/main/img/banking_finance/PIX.png",
    ],
  },
  {
    title: "Crypto",
    desc: "We enable real-time cryptocurrency transactions anywhere in the world through Binance Pay.",
    supportingText:
      "*Please note that our cryptocurrency payment solutions are handled by trusted and reliable partners, not directly by STICPAY.",
    videoLink: "/assets/video/business/stic_direct/Direct_web_04.mp4",
    methods: [
      "https://asset.sticpay.com/main/img/banking_finance/binance_pay.png",
    ],
  },
];

function VideoAccordion() {
  const [expanded, setExpanded] = useState<number>(0);
  return (
    <SectionContainer>
      <VideoContainer
        key={expanded}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Video
          videoLink={ACCORDION_DATA[expanded].videoLink}
          onVideoEnd={() => setExpanded((expanded + 1) % ACCORDION_DATA.length)}
        />
      </VideoContainer>
      <AccordionContainer>
        {ACCORDION_DATA.map((item, i) => (
          <Accordion
            key={item.title}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            headerElement={
              <AccordionHeader isFirst={i === 0} isActive={expanded === i}>
                {item.title}
              </AccordionHeader>
            }
          >
            <AccordionContent>
              <p className="desc">{item.desc}</p>
              {item.supportingText && (
                <p className="supporting-text">{item.supportingText}</p>
              )}
              <div className="method-list">
                {item.methods.map((method, idx) => (
                  <img
                    key={idx}
                    src={method}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                ))}
              </div>
            </AccordionContent>
          </Accordion>
        ))}
      </AccordionContainer>
    </SectionContainer>
  );
}
export default VideoAccordion;

function Video({
  videoLink,
  onVideoEnd,
}: {
  videoLink: string;
  onVideoEnd: () => void;
}) {
  const videoEl = useRef<HTMLVideoElement>(null);

  return (
    <video ref={videoEl} autoPlay muted onEnded={onVideoEnd}>
      <source src={videoLink} type="video/mp4"></source>
    </video>
  );
}

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 800px 1fr;
  gap: 80px;
`;

const VideoContainer = styled(m.div)<{ isFirst?: boolean }>`
  border: 4px solid var(--Neutral-200, #e6e6e6);
  height: 600px;
  border-radius: 30px;
  overflow: hidden;
`;

const AccordionContainer = styled.div`
  text-align: left;
`;

const AccordionHeader = styled.div<{ isFirst: boolean; isActive: boolean }>`
  margin-top: 60px;
  color: var(--STICPAY-Neutral-900, var(--Neutral-900, #333));

  /* 💎 STIC/Landing/H3(36px)/SemiBold */
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 46px; /* 127.778% */

  ${({ isFirst }) => isFirst && `margin-top: 0;`}
  ${({ isActive }) => (isActive ? `opacity:1` : `opacity:0.3;`)};
`;

const AccordionContent = styled.div`
  .desc {
    padding-top: 20px;
    color: var(--STICPAY-Neutral-500, var(--Neutral-500, #666));

    /* 💎 STIC/Landing/B2(20px)/Regular */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
  }
  .supporting-text {
    padding-top: 20px;
    color: var(--sticpay-primary-500-p, var(--Primary-500, #f15822));

    /* 💎 STIC/Landing/B5(14px)/Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  .method-list {
    padding-top: 40px;
    gap: 6px;
    display: flex;
  }
`;
function useState<T>(arg0: number): [any, any] {
  throw new Error("Function not implemented.");
}

function useRef<T>(arg0: null) {
  throw new Error("Function not implemented.");
}

