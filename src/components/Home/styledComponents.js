import styled from 'styled-components'

export const HomeCon = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 100vh;
`
export const LoaderCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const EmptyViewCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmptyImg = styled.img`
  margin-bottom: 15px;
  margin-top: 50px;
  width: 450px;
`

export const EmptyHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  margin-bottom: -10px;
`

export const ErrorInfo = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
`

export const ErrorRetryButton = styled.button`
  background-color: #4656a1;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 10px 25px 10px 25px;
`
export const CourseListCon = styled.div`
  display: flex;
  flex-wrap: wrap;
`
