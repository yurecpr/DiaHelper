import { InfoPageContainer, InfoPageList, InfoPageListElement, InfoPageText, InfoPageTitle } from "./styles";

function InfoPage() {
  return (
    <InfoPageContainer>
      <InfoPageTitle>Key facts about diabetes</InfoPageTitle>
        <InfoPageList>
      <InfoPageListElement>
        The number of people with diabetes rose from 108 million in 1980 to 422
        million in 2014. Prevalence has been rising more rapidly in low- and
        middle-income countries than in high-income countries.
      </InfoPageListElement>
      <InfoPageListElement>
        Diabetes is a major cause of blindness, kidney failure, heart attacks,
        stroke and lower limb amputation.
      </InfoPageListElement>
      <InfoPageListElement>
        Between 2000 and 2019, there was a 3% increase in diabetes mortality
        rates by age.
      </InfoPageListElement>
      <InfoPageListElement>
        In 2019, diabetes and kidney disease due to diabetes caused an estimated
        2 million deaths.
      </InfoPageListElement>
      <InfoPageListElement>
        A healthy diet, regular physical activity, maintaining a normal body
        weight and avoiding tobacco use are ways to prevent or delay the onset
        of type 2 diabetes.
      </InfoPageListElement>
      <InfoPageListElement>
        Diabetes can be treated and its consequences avoided or delayed with
        diet, physical activity, medication and regular screening and treatment
        for complications.
      </InfoPageListElement>
      </InfoPageList>

      <InfoPageTitle>Overview</InfoPageTitle>
      <InfoPageText>
        Diabetes is a chronic disease that occurs either when the pancreas does
        not produce enough insulin or when the body cannot effectively use the
        insulin it produces. Insulin is a hormone that regulates blood glucose.
        Hyperglycaemia, also called raised blood glucose or raised blood sugar,
        is a common effect of uncontrolled diabetes and over time leads to
        serious damage to many of the body's systems, especially the nerves and
        blood vessels. In 2014, 8.5% of adults aged 18 years and older had
        diabetes. In 2019, diabetes was the direct cause of 1.5 million deaths
        and 48% of all deaths due to diabetes occurred before the age of 70
        years. Another 460 000 kidney disease deaths were caused by diabetes,
        and raised blood glucose causes around 20% of cardiovascular deaths.
        Between 2000 and 2019, there was a 3% increase in age-standardized
        mortality rates from diabetes. In lower-middle-income countries, the
        mortality rate due to diabetes increased 13%. By contrast, the
        probability of dying from any one of the four main noncommunicable
        diseases (cardiovascular diseases, cancer, chronic respiratory diseases
        or diabetes) between the ages of 30 and 70 decreased by 22% globally
        between 2000 and 2019.
      </InfoPageText>

      <InfoPageTitle>Symptoms</InfoPageTitle>
      <InfoPageList>
        Symptoms of diabetes may occur suddenly. In type 2 diabetes, the
        symptoms can be mild and may take many years to be noticed. Symptoms of
        diabetes include:
        <InfoPageListElement>feeling very thirsty</InfoPageListElement>
        <InfoPageListElement>needing to urinate more often than usual</InfoPageListElement>
        <InfoPageListElement>blurred vision</InfoPageListElement>
        <InfoPageListElement>feeling tired</InfoPageListElement>
        <InfoPageListElement>losing weight unintentionally</InfoPageListElement>
      </InfoPageList>
      <InfoPageText>
        Over time, diabetes can damage blood vessels in the heart, eyes, kidneys
        and nerves. People with diabetes have a higher risk of health problems
        including heart attack, stroke and kidney failure. Diabetes can cause
        permanent vision loss by damaging blood vessels in the eyes. Many people
        with diabetes develop problems with their feet from nerve damage and
        poor blood flow. This can cause foot ulcers and may lead to amputation.
      </InfoPageText>
    </InfoPageContainer>
  );
}

export default InfoPage;
