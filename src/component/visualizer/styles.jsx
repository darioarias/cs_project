import styled from '@emotion/styled'

export const ListContainer = styled.div`
    display: flex;
    padding: 15px;
    overflow: auto;
`;

export const Node = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    boxShadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    flex-shrink: 0;
`
export const QueueContainer = styled.div`
    display: flex;
    padding: 15px;
    overflow: auto;
`
export const CircleNode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
`

