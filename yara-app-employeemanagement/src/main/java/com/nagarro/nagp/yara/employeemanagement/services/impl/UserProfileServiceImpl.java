package com.nagarro.nagp.yara.employeemanagement.services.impl-app.services.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.common.notifications.dto.UserDTO;
import com.nagarro.nagp.yara-app.mapper.UserProfileMapper;
import com.nagarro.nagp.yara-app.models.UserProfile;
import com.nagarro.nagp.yara-app.repositories.AddressRepository;
import com.nagarro.nagp.yara-app.repositories.UserProfileRepository;
import com.nagarro.nagp.yara-app.services.IUserProfileService;

/**
 * The Class UserProfileServiceImpl.
 */
@Service
public class UserProfileServiceImpl implements IUserProfileService {

	/** The user repo. */
	@Autowired
	private UserProfileRepository userRepo;

	@Autowired
	private AddressRepository addressRepo;

	@Override
	public List<UserProfile> getUsersProfiles() {
		return userRepo.findAll();
	}

	@Override
	public List<UserDTO> getUserDTOsByUserIds(final List<String> userIds) {
		return UserProfileMapper.getUserDTOsFromUserProfiles(userRepo.findAllByUserIdIn(userIds));
	}

	@Override
	public UserProfile getUserProfileById(final Long id) {
		try {
			return userRepo.findById(id).get();
		} catch (final NoSuchElementException nse) {
			return null;
		}
	}

	@Override
	public UserProfile editUserProfile(final Long id, final UserProfile profile) {
		profile.setId(id);
		return this.userRepo.save(profile);
	}

	@Override
	public void deleteUserProfile(final Long id) {
		this.userRepo.deleteById(id);
	}

	@Override
	public UserProfile createUserProfile(final UserProfile profile) {
		return this.userRepo.save(profile);
	}

}