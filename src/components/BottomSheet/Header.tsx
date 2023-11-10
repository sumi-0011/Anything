import styled from "@emotion/styled";

import { useBottomSheetState } from "@/components/BottomSheet/BottomSheetProvider";
import Icon from "@/components/Icon";

interface Props {
  title?: string;
  desc?: string;
}

function BottomSheetHeader({ title, desc }: Props) {
  const { onClose } = useBottomSheetState();

  return (
    <Container>
      {title && <Heading>{title}</Heading>}
      {desc && <Desc>{desc}</Desc>}
      <CloseIcon type="close" onClick={onClose} />
      <Divider />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.text.default};
  position: relative;
`;

const CloseIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bg.muted};
  margin: 10px 0;
`;

export default BottomSheetHeader;
