
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subject_course').del()
    .then(function () {
      // Inserts seed entries
      return knex('subject_course').insert([
        { course_id: 1, subject_id: 1 },
        { course_id: 2, subject_id: 4 },
        { course_id: 3, subject_id: 3 },
        { course_id: 4, subject_id: 5 },
        { course_id: 6, subject_id: 6 },
        { course_id: 6, subject_id: 1 },
        { course_id: 6, subject_id: 2 },
        { course_id: 8, subject_id: 7 },
        { course_id: 8, subject_id: 1 },
        { course_id: 8, subject_id: 4 }
      ]);
    });
};
