/**
 * THE TEACHING BANDICOOT V2 - GLOBAL CONFIGURATION
 * 
 * This file controls the Business Logic, Curriculum Mapping, 
 * and Access Control Policies.
 * 
 * @version 2.0.0
 * @architect Senior JS Architect
 */

export const APP_CONFIG = {
    appName: "The Teaching Bandicoot",
    centerName: "منصة التعليم التفاعلي",
    version: "2.0.0",
    currency: "EGP", // Egyptian Pound
    defaultLocale: "ar-EG"
};

export const CURRENT_TERM = 'term_2'; // Default active term

/* ==========================================================================
   1. EDUCATIONAL HIERARCHY
   ========================================================================== */

export const STAGES = [
    { id: 'primary_stage', name: 'المرحلة الابتدائية', color: '#FF9F43' },
    { id: 'prep_stage', name: 'المرحلة الإعدادية', color: '#0984E3' },
    { id: 'secondary_stage', name: 'المرحلة الثانوية', color: '#D63031' }
];

export const GRADES = [
    // Primary
    { id: 'grade_1_primary', stage_id: 'primary_stage', name: 'الصف الأول الابتدائي', short_name: '1 ابتدائي' },
    { id: 'grade_2_primary', stage_id: 'primary_stage', name: 'الصف الثاني الابتدائي', short_name: '2 ابتدائي' },
    { id: 'grade_3_primary', stage_id: 'primary_stage', name: 'الصف الثالث الابتدائي', short_name: '3 ابتدائي' },
    { id: 'grade_4_primary', stage_id: 'primary_stage', name: 'الصف الرابع الابتدائي', short_name: '4 ابتدائي' },
    { id: 'grade_5_primary', stage_id: 'primary_stage', name: 'الصف الخامس الابتدائي', short_name: '5 ابتدائي' },
    { id: 'grade_6_primary', stage_id: 'primary_stage', name: 'الصف السادس الابتدائي', short_name: '6 ابتدائي' },
    // Prep
    { id: 'grade_1_prep', stage_id: 'prep_stage', name: 'الصف الأول الإعدادي', short_name: '1 إعدادي' },
    { id: 'grade_2_prep', stage_id: 'prep_stage', name: 'الصف الثاني الإعدادي', short_name: '2 إعدادي' },
    { id: 'grade_3_prep', stage_id: 'prep_stage', name: 'الصف الثالث الإعدادي', short_name: '3 إعدادي' },
    // Secondary
    { id: 'grade_1_secondary', stage_id: 'secondary_stage', name: 'الصف الأول الثانوي', short_name: '1 ثانوي' },
    { id: 'grade_2_secondary', stage_id: 'secondary_stage', name: 'الصف الثاني الثانوي', short_name: '2 ثانوي' },
    { id: 'grade_3_secondary', stage_id: 'secondary_stage', name: 'الصف الثالث الثانوي', short_name: '3 ثانوي' }
];

export const TERMS = [
    { id: 'term_1', name: 'الترم الأول' },
    { id: 'term_2', name: 'الترم الثاني' }
];

/* ==========================================================================
   2. CONTENT DEFINITIONS
   ========================================================================== */

export const SUBJECTS = [
    // Core
    { id: 'arabic', name: 'اللغة العربية' },
    { id: 'english', name: 'اللغة الإنجليزية' },
    { id: 'religion', name: 'التربية الدينية' },
    
    // Primary Specific
    { id: 'math', name: 'الرياضيات' },
    { id: 'discovery', name: 'اكتشف (متعدد التخصصات)' }, 
    { id: 'science', name: 'العلوم' },
    { id: 'social_studies', name: 'الدراسات الاجتماعية' },
    { id: 'ict', name: 'تكنولوجيا المعلومات' },
    
    // Prep/Secondary Additions
    { id: 'french', name: 'اللغة الفرنسية' },
    { id: 'german', name: 'اللغة الألمانية' }, 
    { id: 'art', name: 'التربية الفنية' }, 
    
    // Secondary Sciences
    { id: 'physics', name: 'الفيزياء' },
    { id: 'chemistry', name: 'الكيمياء' },
    { id: 'biology', name: 'الأحياء' },
    { id: 'geology', name: 'الجيولوجيا' }, 
    
    // Secondary Humanities
    { id: 'history', name: 'التاريخ' },
    { id: 'geography', name: 'الجغرافيا' },
    { id: 'philosophy', name: 'الفلسفة والمنطق' },
    { id: 'psychology', name: 'علم النفس والاجتماع' },
    
    // Secondary Advanced Math
    { id: 'pure_math', name: 'الرياضيات البحتة' }, 
    { id: 'applied_math', name: 'الرياضيات التطبيقية' } 
];

/* ==========================================================================
   3. INTELLIGENT MAPPING
   ========================================================================== */

const BUNDLE_PRIM_LOWER = ['arabic', 'english', 'math', 'religion', 'discovery'];
const BUNDLE_PRIM_UPPER = ['arabic', 'english', 'math', 'religion', 'science', 'social_studies', 'ict'];
const BUNDLE_PREP = ['arabic', 'english', 'math', 'religion', 'science', 'social_studies', 'ict', 'art', 'french'];
const BUNDLE_SEC_COMMON = ['arabic', 'english', 'religion', 'french', 'ict'];

export const GRADE_SUBJECT_MAP = {
    'grade_1_primary': BUNDLE_PRIM_LOWER,
    'grade_2_primary': BUNDLE_PRIM_LOWER,
    'grade_3_primary': BUNDLE_PRIM_LOWER,
    'grade_4_primary': BUNDLE_PRIM_UPPER,
    'grade_5_primary': BUNDLE_PRIM_UPPER,
    'grade_6_primary': BUNDLE_PRIM_UPPER,
    'grade_1_prep': BUNDLE_PREP,
    'grade_2_prep': BUNDLE_PREP,
    'grade_3_prep': BUNDLE_PREP,
    'grade_1_secondary': [...BUNDLE_SEC_COMMON, 'math', 'physics', 'chemistry', 'biology', 'history', 'geography', 'philosophy'],
    'grade_2_secondary': [...BUNDLE_SEC_COMMON, 'pure_math', 'applied_math', 'physics', 'chemistry', 'biology', 'history', 'geography', 'philosophy', 'psychology'],
    'grade_3_secondary': [...BUNDLE_SEC_COMMON, 'pure_math', 'applied_math', 'physics', 'chemistry', 'biology', 'geology', 'history', 'geography', 'philosophy', 'psychology']
};

/* ==========================================================================
   4. PERMISSION SCHEMA & POWERS
   ========================================================================== */

export const PERMISSIONS_SCHEMA = {
    secretary: [
        { key: 'can_view_phones', label: '📞 رؤية أرقام الهواتف', default: false },
        { key: 'can_add_class_points', label: '➕ إضافة نقاط سلوك', default: true },
        { key: 'can_edit_attendance', label: '📅 تعديل الحضور', default: true },
        { key: 'can_print_reports', label: '🖨️ طباعة التقارير', default: true },
        { key: 'can_collect_fees', label: '💰 تحصيل المصروفات', default: false }
    ]
};

export const SYSTEM_POWERS = [
    { id: 'can_manage_users', label: 'إدارة المستخدمين' },
    { id: 'can_manage_finance', label: 'إدارة المالية' },
    { id: 'can_view_analytics', label: 'رؤية التقارير' },
    { id: 'can_view_phones', label: 'رؤية أرقام الهواتف' },
    { id: 'can_create_content', label: 'إنشاء محتوى (دروس)' },
    { id: 'can_review_content', label: 'مراجعة المحتوى فقط' },
    { id: 'can_print_reports', label: 'طباعة الجداول' },
    { id: 'can_grade_behavior', label: 'تسجيل السلوك' },
    { id: 'super_admin', label: 'صلاحيات كاملة (Super)' }
];

/* ==========================================================================
   5. FINANCE CONFIGURATION
   ========================================================================== */

export const FINANCE_OPTS = {
    income_categories: [
        { id: 'subscription', name: 'اشتراك شهري' },
        { id: 'books', name: 'رسوم كتب / مذكرات' },
        { id: 'uniform', name: 'زي مدرسي' },
        { id: 'exam_fee', name: 'رسوم امتحانات' },
        { id: 'other_income', name: 'إيرادات أخرى' }
    ],
    expense_categories: [
        { id: 'teacher_salary', name: 'رواتب المعلمين' },
        { id: 'staff_salary', name: 'رواتب الإداريين' },
        { id: 'rent', name: 'إيجار السنتر' },
        { id: 'utilities', name: 'كهرباء / مياه / نت' },
        { id: 'maintenance', name: 'صيانة وتجهيزات' },
        { id: 'marketing', name: 'دعاية وإعلان' },
        { id: 'printing', name: 'طباعة وتصوير' }
    ]
};

/* ==========================================================================
   6. ASSETS
   ========================================================================== */

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