/**
 * THE TEACHING BANDICOOT - FRONTEND CONFIGURATION
 * 
 * This file acts as the single source of truth for all static data,
 * UI labels, and structural hierarchy within the application.
 * 
 * @version 1.0.0
 * @architect Senior JS Architect
 */

export const APP_CONFIG = {
  appName: "The Teaching Bandicoot",
  centerName: "منصة التعليم التفاعلي",
  locale: "ar-EG",
  version: "1.0.0",
  currency: "EGP"
};

/* ==========================================================================
   HIERARCHY CONSTANTS
   ========================================================================== */

/**
 * Educational Stages
 * Used for top-level filtering.
 */
export const STAGES = [
  { id: 'primary_stage', name: 'المرحلة الابتدائية', color: '#FF9F43' },
  { id: 'prep_stage', name: 'المرحلة الإعدادية', color: '#0984E3' },
  { id: 'secondary_stage', name: 'المرحلة الثانوية', color: '#D63031' }
];

/**
 * Educational Grades
 * Flat array containing all 12 years of the Egyptian curriculum.
 * Linked to STAGES via 'stage_id'.
 */
export const GRADES = [
  // --- Primary Stage (الابتدائية) ---
  { id: 'grade_1_primary', stage_id: 'primary_stage', name: 'الصف الأول الابتدائي', short_name: '1 ابتدائي' },
  { id: 'grade_2_primary', stage_id: 'primary_stage', name: 'الصف الثاني الابتدائي', short_name: '2 ابتدائي' },
  { id: 'grade_3_primary', stage_id: 'primary_stage', name: 'الصف الثالث الابتدائي', short_name: '3 ابتدائي' },
  { id: 'grade_4_primary', stage_id: 'primary_stage', name: 'الصف الرابع الابتدائي', short_name: '4 ابتدائي' },
  { id: 'grade_5_primary', stage_id: 'primary_stage', name: 'الصف الخامس الابتدائي', short_name: '5 ابتدائي' },
  { id: 'grade_6_primary', stage_id: 'primary_stage', name: 'الصف السادس الابتدائي', short_name: '6 ابتدائي' },

  // --- Preparatory Stage (الإعدادية) ---
  { id: 'grade_1_prep', stage_id: 'prep_stage', name: 'الصف الأول الإعدادي', short_name: '1 إعدادي' },
  { id: 'grade_2_prep', stage_id: 'prep_stage', name: 'الصف الثاني الإعدادي', short_name: '2 إعدادي' },
  { id: 'grade_3_prep', stage_id: 'prep_stage', name: 'الصف الثالث الإعدادي', short_name: '3 إعدادي' },

  // --- Secondary Stage (الثانوية) ---
  { id: 'grade_1_secondary', stage_id: 'secondary_stage', name: 'الصف الأول الثانوي', short_name: '1 ثانوي' },
  { id: 'grade_2_secondary', stage_id: 'secondary_stage', name: 'الصف الثاني الثانوي', short_name: '2 ثانوي' },
  { id: 'grade_3_secondary', stage_id: 'secondary_stage', name: 'الصف الثالث الثانوي', short_name: '3 ثانوي' }
];

/**
 * Academic Terms
 */
export const TERMS = [
  { id: 'term_1', name: 'الترم الأول' },
  { id: 'term_2', name: 'الترم الثاني' }
];

/* ==========================================================================
   CURRICULUM CONTENT
   ========================================================================== */

/**
 * Subjects List
 * Comprehensive list of subjects across all stages.
 */
export const SUBJECTS = [
  // General
  { id: 'arabic', name: 'اللغة العربية' },
  { id: 'english', name: 'اللغة الإنجليزية' },
  { id: 'french', name: 'اللغة الفرنسية' },
  { id: 'religion', name: 'التربية الدينية' },
  { id: 'ict', name: 'تكنولوجيا المعلومات' },
  
  // Math & Sciences (Primary/Prep)
  { id: 'math', name: 'الرياضيات' },
  { id: 'science', name: 'العلوم' },
  { id: 'social_studies', name: 'الدراسات الاجتماعية' },

  // Secondary Sciences
  { id: 'physics', name: 'الفيزياء' },
  { id: 'chemistry', name: 'الكيمياء' },
  { id: 'biology', name: 'الأحياء' },
  { id: 'geology', name: 'الجيولوجيا' },

  // Secondary Arts/Humanities
  { id: 'history', name: 'التاريخ' },
  { id: 'geography', name: 'الجغرافيا' },
  { id: 'philosophy', name: 'الفلسفة والمنطق' },
  { id: 'psychology', name: 'علم النفس والاجتماع' },
  
  // Secondary Math Branches
  { id: 'pure_math', name: 'الرياضيات البحتة' },
  { id: 'applied_math', name: 'الرياضيات التطبيقية' }
];

/* ==========================================================================
   GAMIFICATION CONFIGURATION
   ========================================================================== */

/**
 * Reward Definitions
 * Maps specific content types to their specific reward assets and names.
 */
export const GAME_CONFIG = {
  rewards: {
    lesson: {
      type: 'star',
      name: 'نجمة',
      value: 10,
      icon_asset: '/assets/rewards/star.png'
    },
    revision: {
      type: 'crystal',
      name: 'كريستالة',
      value: 25,
      icon_asset: '/assets/rewards/crystal.png'
    },
    exam: {
      type: 'gem',
      name: 'جوهرة',
      value: 50,
      icon_asset: '/assets/rewards/gem.png'
    }
  },
  levels: {
    beginner: { threshold: 0, label: 'مبتدئ' },
    intermediate: { threshold: 100, label: 'متوسط' },
    advanced: { threshold: 500, label: 'متقدم' },
    legend: { threshold: 1000, label: 'أسطورة' }
  }
};

/* ==========================================================================
   USER PROFILE ASSETS
   ========================================================================== */

/**
 * Avatar Collection
 * Identifiers for profile image selections.
 */
export const AVATARS = [
  { id: 'lion', name: 'الأسد الشجاع' },
  { id: 'astronaut', name: 'رائد الفضاء' },
  { id: 'robot', name: 'الروبوت الذكي' },
  { id: 'scientist', name: 'المخترع الصغير' },
  { id: 'cat_wizard', name: 'القط الساحر' },
  { id: 'diver', name: 'الغواص' },
  { id: 'superhero', name: 'البطل الخارق' },
  { id: 'ninja', name: 'النينجا السريع' },
  { id: 'fox', name: 'الثعلب الماكر' },
  { id: 'owl', name: 'البومة الحكيمة' }
];