import React, { useState, useEffect } from 'react';

function Member_Approval() {
  const [pendingMembers, setPendingMembers] = useState([]);

  useEffect(() => {
    // Example: Fetch pending membership requests from API
    fetchPendingMembers();
  }, []);

  const fetchPendingMembers = async () => {
    try {
      // Example: Fetch pending membership requests from API
      const response = await fetch('https://api.example.com/membership/pending');
      const data = await response.json();
      setPendingMembers(data);
    } catch (error) {
      console.error('Error fetching pending members:', error);
    }
  };

  const approveMembership = async (memberId) => {
    try {
      // Example: Send approval request to API
      await fetch(`https://api.example.com/membership/approve/${memberId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'approved' })
      });
      
      // Update local state after approval
      const updatedPendingMembers = pendingMembers.filter(member => member.id !== memberId);
      setPendingMembers(updatedPendingMembers);
    } catch (error) {
      console.error('Error approving membership:', error);
    }
  };

  const denyMembership = async (memberId) => {
    try {
      // Example: Send denial request to API
      await fetch(`https://api.example.com/membership/deny/${memberId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'denied' })
      });

      // Update local state after denial
      const updatedPendingMembers = pendingMembers.filter(member => member.id !== memberId);
      setPendingMembers(updatedPendingMembers);
    } catch (error) {
      console.error('Error denying membership:', error);
    }
  };

  return (
    <div className="admin-approval mt-5 p-5">
      <h2>Admin Approval</h2>
      <ul>
        {pendingMembers.map(member => (
          <li key={member.id}>
            <p>Name: {member.name}</p>
            <button onClick={() => approveMembership(member.id)}>Approve</button>
            <button onClick={() => denyMembership(member.id)}>Deny</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Member_Approval;
