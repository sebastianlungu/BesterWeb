import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, interestedInEarlyAccess } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate interestedInEarlyAccess (optional)
    const earlyAccess = typeof interestedInEarlyAccess === 'boolean'
      ? interestedInEarlyAccess
      : false;

    // TODO: Integrate with external waitlist provider
    // Examples:
    // - ConvertKit: await fetch('https://api.convertkit.com/v3/forms/...')
    // - Mailchimp: await fetch('https://...mailchimp.com/3.0/lists/...')
    // - Supabase: await supabase.from('waitlist').insert([...])
    // - Custom backend: await fetch('https://api.bester.com/waitlist', {...})

    // For now, just log the submission (STUB)
    console.log('Waitlist submission:', {
      email,
      interestedInEarlyAccess: earlyAccess,
      timestamp: new Date().toISOString(),
    });

    // Simulate success
    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist',
    });

    // Uncomment to simulate error for testing
    // return NextResponse.json(
    //   { success: false, message: 'Server error' },
    //   { status: 500 }
    // );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
