1. Record Architecture Decisions
--------------------------------

Status
------

Review

Context
-------

We would like to implement an API that returns the current sequence exam item and active exam attempt.
Reasons:
1. No api endpoint which can return submitted exam attempts by course_id, content_id or user_id.
As single page application relies on attemt status provided by backend when user reloads the page
after exam submission.
2. It's more performant and easier to use only one API endpoint to fetch all the needed data.
3. We would like to get timed exam duration for the timer component so timer block is displayed and
time is running in any course.

Decision
--------

Create a single API endpoint that provides required exam/attempt data:
/api/edx_proctoring/v1/proctored_exam/exam_attempts/course_id/${courseId}/content_id/${contentId}

Consequences
------------

We are able to update the library redux state easily.

References
----------

* https://github.com/raccoongang/edx-proctoring/blob/EDUCATOR-5733/edx_proctoring/views.py#L173
