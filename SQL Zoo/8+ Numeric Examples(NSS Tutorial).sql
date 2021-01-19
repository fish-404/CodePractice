/* 1
 * The example shows the number who responded for:
 * 
 * question 1
 * at 'Edinburgh Napier University'
 * studying '(8) Computer Science'
 * Show the the percentage who STRONGLY AGREE
 */
select A_STRONGLY_AGREE
from nss
where 
    question = 'Q01'
    and institution ='Edinburgh Napier University'
    and subject ='(8) Computer Science'

/* 2
 * Show the institution and subject where the score is at least 100 for question 15.
 */
select
    institution
    , subject
from nss
where 
    question = 'Q15'
    and score >= 100 

/* 3
 * Show the institution and score where the score for '(8) Computer Science' is less than 50 for question 'Q15'
 */
select
    institution
    , score
from nss
where 
    question = 'Q15'
    and subject='(8) Computer Science'
    and score < 50

/* 4
 * Show the subject and total number of students who responded to question 22 for each of the subjects '(8) Computer Science' and '(H) Creative Arts and Design'.
 */
select 
    subject
    , sum(response)
from nss
where 
    question = 'Q22'
    and subject in (
        '(8) Computer Science'
        , '(H) Creative Arts and Design'
    )
group by subject

/* 5
 * Show the subject and total number of students who A_STRONGLY_AGREE to question 22 for each of the subjects '(8) Computer Science' and '(H) Creative Arts and Design'.
 */
select 
    subject
    , sum(A_STRONGLY_AGREE*response/100) 
from nss
where 
    question='Q22'
    and subject in (
        '(8) Computer Science'
        , '(H) Creative Arts and Design'
    )
group by subject

/* 6
 * Show the percentage of students who A_STRONGLY_AGREE to question 22 for the subject '(8) Computer Science' show the same figure for the subject '(H) Creative Arts and Design'.
 * 
 * Use the ROUND function to show the percentage without decimal places.
 */
select 
    subject
    , round(
        sum(A_STRONGLY_AGREE*response)/sum(response)
        , 0
    )
from nss
where 
    question ='Q22'
    and subject in (
        '(8) Computer Science'
        , '(H) Creative Arts and Design'
    )
group by subject

/* 7
 * Show the average scores for question 'Q22' for each institution that include 'Manchester' in the name.
 */
select 
    institution
    , round(
        sum(score*response)/sum(response)
        ,0
    )
from nss
where 
    question ='Q22'
    and institution like '%Manchester%'
group by institution
order by institution

/* 8
 * Show the institution, the total sample size and the number of computing students for institutions in Manchester for 'Q01'.
 */
select
    institution
    , sum(sample)
    , (
        select sample
        from nss as nss_x
        where 
            question = 'Q01'
            and institution like '%Manchester%'
            and nss_x.subject = '(8) Computer Science'
            and nss_x.institution = nss_y.institution
     ) as comp
from nss as nss_y
where 
    question = 'Q01'
    and institution like '%Manchester%'
group by institution
order by institution
