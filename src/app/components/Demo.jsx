"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Building, User, Briefcase, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Demo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    profile: '',
    position: '',
    email: '',
    phone: '',
    meetingPlatform: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_63d0ppr';
  const EMAILJS_TEMPLATE_ID = 'template_ex6c6ox';
  const EMAILJS_PUBLIC_KEY = '8nV8GppQ82RWajpEo';

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        // Personal Information
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`,
        
        // Company Information
        company: formData.company,
        companyProfile: formData.profile,
        position: formData.position,
        
        // Contact Information
        email: formData.email,
        phone: formData.phone || 'Not provided',
        
        // Meeting Details
        meetingPlatform: formData.meetingPlatform,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        
        // Additional Information
        additionalNotes: formData.additionalNotes || 'No additional notes provided',
        
        // Form Metadata
        formType: 'Demo Request',
        submissionDate: new Date().toLocaleDateString(),
        submissionTime: new Date().toLocaleTimeString(),
        
        // Company Profile Mapping
        companyProfileDisplay: getCompanyProfileDisplay(formData.profile),
        meetingPlatformDisplay: getMeetingPlatformDisplay(formData.meetingPlatform)
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            firstName: '',
            lastName: '',
            company: '',
            profile: '',
            position: '',
            email: '',
            phone: '',
            meetingPlatform: '',
            preferredDate: '',
            preferredTime: '',
            additionalNotes: ''
          });
        }, 3000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send demo request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get company profile display text
  const getCompanyProfileDisplay = (profile) => {
    const profileMap = {
      'startup': 'Startup (1-50 employees)',
      'small-business': 'Small Business (51-200 employees)',
      'medium-business': 'Medium Business (201-1000 employees)',
      'large-enterprise': 'Large Enterprise (1000+ employees)',
      'government': 'Government Agency',
      'education': 'Educational Institution',
      'healthcare': 'Healthcare Organization',
      'non-profit': 'Non-Profit Organization'
    };
    return profileMap[profile] || profile;
  };

  // Helper function to get meeting platform display text
  const getMeetingPlatformDisplay = (platform) => {
    const platformMap = {
      'zoom': 'Zoom Meeting',
      'google-meet': 'Google Meet',
      'teams': 'Microsoft Teams'
    };
    return platformMap[platform] || platform;
  };

  const meetingPlatforms = [
    { id: 'zoom', name: 'Zoom Meeting', icon: '🔵' },
    { id: 'google-meet', name: 'Google Meet', icon: '🟢' },
    { id: 'teams', name: 'Microsoft Teams', icon: '🔵' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how desknet's NEO by Inspire can transform your team's collaboration. 
            Schedule a personalized demo with our experts.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="bg-white shadow-2xl p-8 md:p-12 ml-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitSuccess ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Demo Request Submitted!</h3>
              <p className="text-gray-600">We'll contact you within 24 hours to confirm your demo session.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building className="inline w-4 h-4 mr-2" />
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Briefcase className="inline w-4 h-4 mr-2" />
                    Position *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="e.g., Manager, Director, CEO"
                  />
                </div>
              </div>

              {/* Company Profile */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Building className="inline w-4 h-4 mr-2" />
                  Company Profile *
                </label>
                <select
                  name="profile"
                  value={formData.profile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                >
                  <option value="">Select your company profile</option>
                  <option value="startup">Startup (1-50 employees)</option>
                  <option value="small-business">Small Business (51-200 employees)</option>
                  <option value="medium-business">Medium Business (201-1000 employees)</option>
                  <option value="large-enterprise">Large Enterprise (1000+ employees)</option>
                  <option value="government">Government Agency</option>
                  <option value="education">Educational Institution</option>
                  <option value="healthcare">Healthcare Organization</option>
                  <option value="non-profit">Non-Profit Organization</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Meeting Platform Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  <Video className="inline w-4 h-4 mr-2" />
                  Preferred Meeting Platform *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {meetingPlatforms.map((platform) => (
                    <label
                      key={platform.id}
                      className={`relative cursor-pointer border-2 p-4 transition-all duration-200 ${
                        formData.meetingPlatform === platform.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="meetingPlatform"
                        value={platform.id}
                        checked={formData.meetingPlatform === platform.id}
                        onChange={handleInputChange}
                        required
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-2">{platform.icon}</div>
                        <div className="font-medium text-gray-800">{platform.name}</div>
                      </div>
                      {formData.meetingPlatform === platform.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Meeting Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900"
                  >
                    <option value="">Select preferred time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Tell us about your specific needs, questions, or any other information you'd like to share..."
                />
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm">{submitError}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                  } text-white shadow-lg hover:shadow-xl`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Submitting Request...
                    </div>
                  ) : (
                    'Request Demo'
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
}
